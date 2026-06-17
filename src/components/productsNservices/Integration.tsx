'use client'
import { Container } from '@/layouts'
import React, { useState } from 'react'

const steps = [
  "Get API Key",
  "Make API Request",
  "Receive Response",
  "Handle Webhook"
]
export default function Integration() {
  const [active, setActive] = useState(0)
  return (
    <div className='py-16'>
      <Container>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
          <div className='bg-gray-50 p-5 space-y-3'>
            <h1 className='text-xl font-bold'>Seamless Integration</h1>
            <h2 className='font-semibold'>Built to integrate with your existing infrastructure</h2>
            <ul className='list-disc list-inside'>
              <h2 className='font-semibold'>Key Points:</h2>
              <li>API-first architecture</li>
              <li>RESTful APIs & webhooks</li>
              <li>SDK available for developers</li>
              <li>Third-party system integration</li>
              <li>Legacy system compatibility</li>
              <li>Payment gateway integrations</li>
            </ul>
          </div>
          <div>
            <div className="py-8">
              {/* Tabs */}
              <div className="flex gap-3 overflow-x-auto whitespace-nowrap pb-2 sm:flex-wrap sm:overflow-visible">
                {steps.map((step, index) => (
                  <button
                    key={index}
                    onClick={() => setActive(index)}
                    className={`px-4 py-2 rounded flex-shrink-0 transition ${active === index
                        ? 'bg-blue-950 text-white'
                        : 'bg-gray-200 text-blue-950'
                      }`}
                  >
                    {step}
                  </button>
                ))}
              </div>

              {/* Content */}
              <div className="mt-6 p-6 bg-gray-100 rounded-lg">
                {active === 0 && <p>Sign up and generate your API key.</p>}
                {active === 1 && <p>Send a POST request to our API.</p>}
                {active === 2 && <p>Receive a JSON response instantly.</p>}
                {active === 3 && <p>Use webhooks to get real-time updates.</p>}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
