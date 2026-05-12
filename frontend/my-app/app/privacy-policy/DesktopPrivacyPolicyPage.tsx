import React from "react"
import Image from "next/image"

const DesktopPrivacyPolicy = () => {
  return (
    <div className="w-full flex flex-col bg-white">

      {/* ---------- HERO SECTION ---------- */}

      <section className="relative w-full min-h-95 flex items-center justify-center text-center">

        <div className="relative z-10 max-w-5xl px-6">

          <p className="text-sm uppercase tracking-[0.3em] text-gray-800 mb-4">
            Legal Information
          </p>

          <h1 className="text-5xl font-semibold mb-6 text-gray-900">
            Privacy Policy
          </h1>

          <p className="text-lg text-gray-800 leading-relaxed">
            At A R Luxury Management, protecting your privacy and personal
            information is a priority. This policy outlines how we collect,
            use, store, and safeguard your information while ensuring
            transparency and compliance with applicable privacy laws.
          </p>

        </div>

      </section>

      {/* ---------- CONTENT SECTION ---------- */}

      <section className="w-full px-8 pb-24">

        <div className="max-w-5xl mx-auto">

          {/* ---------- INTRO ---------- */}

          <div className="mb-16">

            <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">
              Privacy & Protection
            </p>

            <h2 className="text-4xl font-semibold text-black mb-6">
              Your Information Matters
            </h2>

            <p className="text-gray-600 leading-relaxed text-lg">
              This privacy policy has been compiled to better serve those
              concerned with how their Personally Identifiable Information
              (PII) is used online.PII, as used in Canada privacy law and 
              information security, is information that can be used on its 
              own or with other information to identify, contact, or locate 
              a single person, or to identify an individual in context. 
              Please read this policy carefully to
              understand how we collect, protect, and handle your
              information in accordance with Canadian privacy law and
              information security standards.
            </p>

          </div>

          {/* ---------- POLICY CONTENT ---------- */}

          <div className="space-y-14 text-gray-700 leading-relaxed">

            {/* SECTION */}

            <div>

              <h3 className="text-2xl font-semibold text-black mb-5">
                Information We Collect
              </h3>

              <p className="mb-5">
                When registering, contacting us, subscribing to updates,
                or interacting with our platform, you may be asked to
                provide details such as:
              </p>

              <ul className="list-disc pl-6 space-y-3">
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Business or company information</li>
                <li>Other information relevant to your inquiry</li>
              </ul>

            </div>

            {/* SECTION */}

            <div>

              <h3 className="text-2xl font-semibold text-black mb-5">
                When Information Is Collected
              </h3>

              <p className="mb-5">
                We collect information when you:
              </p>

              <ul className="list-disc pl-6 space-y-3">
                <li>Register on our website</li>
                <li>Fill out a contact form</li>
                <li>Subscribe to newsletters</li>
                <li>Respond to surveys or promotions</li>
                <li>Interact with certain website features</li>
              </ul>

            </div>

            {/* SECTION */}

            <div>

              <h3 className="text-2xl font-semibold text-black mb-5">
                How We Use Your Information
              </h3>

              <p className="mb-5">
                Information collected may be used to:
              </p>

              <ul className="list-disc pl-6 space-y-3">
                <li>Personalize your experience</li>
                <li>Improve our website and services</li>
                <li>Respond to customer service requests</li>
                <li>Administer promotions or surveys</li>
                <li>Provide updates and marketing communications</li>
              </ul>

            </div>

            {/* SECTION */}

            <div>

              <h3 className="text-2xl font-semibold text-black mb-5">
                Security & Protection
              </h3>

              <p className="mb-5">
                We implement a variety of commercially reasonable
                security measures to protect your personal information.
                Sensitive information is encrypted through Secure Socket
                Layer (SSL) technology and stored within secured
                networks accessible only to authorized personnel.
              </p>

              <p>
                While we continuously work to maintain high security
                standards, no method of transmission over the internet
                can be guaranteed completely secure.
              </p>

            </div>

            {/* SECTION */}

            <div>

              <h3 className="text-2xl font-semibold text-black mb-5">
                Cookies
              </h3>

              <p className="mb-5">
                Our website uses cookies to improve user experience,
                remember preferences, and gather analytical data about
                website traffic and interactions.
              </p>

              <p className="mb-5">
                You may disable cookies through your browser settings,
                though certain website features may not function
                properly afterward.
              </p>

            </div>

            {/* SECTION */}

            <div>

              <h3 className="text-2xl font-semibold text-black mb-5">
                Third-Party Disclosure
              </h3>

              <p>
                We do not sell, trade, or otherwise transfer personally
                identifiable information to outside parties unless
                legally required or explicitly authorized by the user.
              </p>

            </div>

            {/* SECTION */}

            <div>

              <h3 className="text-2xl font-semibold text-black mb-5">
                PIPEDA Compliance
              </h3>

              <p className="mb-5">
                A R Luxury Management complies with Canada’s Personal
                Information Protection and Electronic Documents Act
                (PIPEDA) regarding the collection, use, retention,
                access, and disclosure of personal information.
              </p>

              <p className="mb-5">
                Under PIPEDA, individuals may request access to,
                correction of, or deletion of personal information
                maintained by our organization.
              </p>

              <p>
                For more information regarding PIPEDA, please visit:
              </p>

              <a
                href="https://www.priv.gc.ca/en/privacy-topics/privacy-laws-in-canada/the-personal-information-protection-and-electronic-documents-act-pipeda/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-black font-medium hover:underline"
              >
                Learn More About PIPEDA
              </a>

            </div>

            {/* SECTION */}

            <div>

              <h3 className="text-2xl font-semibold text-black mb-5">
                Access & Corrections
              </h3>

              <p>
                Individuals may request access to personal information
                maintained by A R Luxury Management and may request
                updates, corrections, or deletion where appropriate.
              </p>

            </div>

            {/* SECTION */}

            <div>

              <h3 className="text-2xl font-semibold text-black mb-5">
                Complaint Resolution
              </h3>

              <p className="mb-5">
                If you have questions, concerns, or complaints regarding
                this Privacy Policy or the handling of your personal
                information, please contact us using the information
                below.
              </p>

              <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8">

                <div className="space-y-6">

                  <div>
                    <p className="text-sm uppercase tracking-wider text-gray-400 mb-2">
                      Email
                    </p>

                    <p className="text-lg text-black">
                      privacy@arluxurymanagement.com
                    </p>
                  </div>

                  <div>
                    <p className="text-sm uppercase tracking-wider text-gray-400 mb-2">
                      Mailing Address
                    </p>

                    <p className="text-lg text-black leading-relaxed">
                      A R Luxury Management LLC.
                      <br />
                      Attn: Chief Privacy Officer
                      <br />
                      Address Line Here
                    </p>
                  </div>

                  <div>
                    <p className="text-sm uppercase tracking-wider text-gray-400 mb-2">
                      Phone / Fax
                    </p>

                    <p className="text-lg text-black">
                      +1 (000) 000-0000
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  )
}

export default DesktopPrivacyPolicy