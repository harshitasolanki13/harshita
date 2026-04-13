from django.conf import settings
from django.core.mail import send_mail
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from .serializers import ContactMessageSerializer


class ContactAPIView(APIView):
    authentication_classes = []
    permission_classes = []

    def post(self, request):
        serializer = ContactMessageSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        message = serializer.save()

        # AUTO-ADDED: keep the API user-friendly even if SMTP is temporarily unavailable.
        mail_sent = True
        try:
            send_mail(
                subject=f"Portfolio contact from {message.name}",
                message=(
                    f"Name: {message.name}\n"
                    f"Email: {message.email}\n\n"
                    f"Message:\n{message.message}"
                ),
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[settings.CONTACT_RECEIVER_EMAIL],
                fail_silently=False,
            )
        except Exception:
            mail_sent = False

        return Response(
            {
                "message": "Message received successfully.",
                "mail_sent": mail_sent,
            },
            status=status.HTTP_201_CREATED,
        )
