import { useState } from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'
import { sendContactMessage } from '../api/contact'

const initialForm = {
  name: '',
  email: '',
  message: '',
}

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/harshitasolanki13', icon: Github },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/harshita-rajesh-solanki/',
    icon: Linkedin,
  },
  { name: 'Email', href: 'mailto:harshu131203@gmail.com', icon: Mail },
]

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState({ type: 'idle', message: '' })
  const [submitting, setSubmitting] = useState(false)

  const onChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    setSubmitting(true)
    setStatus({ type: 'idle', message: '' })

    try {
      const response = await sendContactMessage(form)
      setStatus({
        type: 'success',
        message:
          response?.message ??
          'Your message has been sent successfully. I will get back to you soon.',
      })
      setForm(initialForm)
    } catch (error) {
      const message =
        error?.response?.data?.message ??
        'Something went wrong while sending your message. Please try again.'

      setStatus({ type: 'error', message })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section-shell bg-white dark:bg-[#0F172A]">
      <div className="mx-auto max-w-2xl text-center">
        <p className="section-label">Get In Touch</p>
        <h2 className="section-title">Let&apos;s build something thoughtful together.</h2>
        <p className="section-copy mt-5">
          Whether you have a project idea, collaboration opportunity, or just want to connect,
          I&apos;d love to hear from you.
        </p>

        <div
          data-aos="fade-up"
          className="mt-10 rounded-2xl border border-[#E5E7EB] bg-[#FAFAFA] p-8 text-left shadow-card dark:border-[#334155] dark:bg-[#1E293B]"
        >
          {status.type === 'error' && (
            <div className="mb-4 rounded-xl border border-[#FCA5A5] bg-[#FEF3F2] px-4 py-3 text-[14px] text-[#B42318] dark:border-[#7F1D1D] dark:bg-[#450A0A]/30 dark:text-[#FCA5A5]">
              {status.message}
            </div>
          )}

          {status.type === 'success' ? (
            <div className="rounded-xl border border-[#A7F3D0] bg-[#ECFDF3] p-6 text-center text-[#067647] dark:border-[#14532D] dark:bg-[#052E16]/30 dark:text-[#86EFAC]">
              <h3 className="text-[20px] font-semibold">Message sent</h3>
              <p className="mt-2 text-[14px] leading-[1.7]">{status.message}</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-5">
              <label className="block">
                <span className="text-[14px] font-medium text-[#111827] dark:text-[#F1F5F9]">
                  Name
                </span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  required
                  className="mt-1 w-full rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 text-[14px] text-[#111827] placeholder-[#9CA3AF] outline-none transition-all duration-300 focus:border-transparent focus:ring-2 focus:ring-[#6366F1] dark:border-[#334155] dark:bg-[#0F172A] dark:text-[#F1F5F9] dark:placeholder-[#64748B] dark:focus:ring-[#818CF8]"
                  placeholder="Your name"
                />
              </label>

              <label className="block">
                <span className="text-[14px] font-medium text-[#111827] dark:text-[#F1F5F9]">
                  Email
                </span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  required
                  className="mt-1 w-full rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 text-[14px] text-[#111827] placeholder-[#9CA3AF] outline-none transition-all duration-300 focus:border-transparent focus:ring-2 focus:ring-[#6366F1] dark:border-[#334155] dark:bg-[#0F172A] dark:text-[#F1F5F9] dark:placeholder-[#64748B] dark:focus:ring-[#818CF8]"
                  placeholder="your.email@example.com"
                />
              </label>

              <label className="block">
                <span className="text-[14px] font-medium text-[#111827] dark:text-[#F1F5F9]">
                  Message
                </span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  required
                  rows="6"
                  className="mt-1 w-full rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 text-[14px] text-[#111827] placeholder-[#9CA3AF] outline-none transition-all duration-300 focus:border-transparent focus:ring-2 focus:ring-[#6366F1] dark:border-[#334155] dark:bg-[#0F172A] dark:text-[#F1F5F9] dark:placeholder-[#64748B] dark:focus:ring-[#818CF8]"
                  placeholder="Tell me a little about your project or idea."
                />
              </label>

              <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-xl bg-[#6366F1] py-3 text-[15px] font-semibold text-white transition-all duration-300 hover:bg-[#4F46E5] disabled:cursor-not-allowed disabled:opacity-60 dark:bg-[#818CF8] dark:hover:bg-[#6366F1]"
              >
                {submitting ? 'Sending...' : 'Submit'}
              </button>
            </form>
          )}
        </div>

        <div data-aos="fade-up" data-aos-delay="100" className="mt-10 flex justify-center gap-4">
          {socialLinks.map((link) => {
            const Icon = link.icon

            return (
              <a
                key={link.name}
                href={link.href}
                target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto:') ? undefined : 'noreferrer'}
                aria-label={link.name}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E5E7EB] bg-white text-[#6B7280] transition-all duration-300 hover:border-[#6366F1] hover:text-[#6366F1] dark:border-[#334155] dark:bg-[#1E293B] dark:text-[#94A3B8] dark:hover:border-[#818CF8] dark:hover:text-[#818CF8]"
              >
                <Icon size={18} />
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
