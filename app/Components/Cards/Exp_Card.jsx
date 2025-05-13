import React from 'react'
import { GiSuitcase } from "react-icons/gi";


const Exp_Card = () => {
  return (
      <section className="flex-1 flex flex-col items-center max-w-2xl text-center">
          <div className="flex items-center gap-2 text-2xl font-semibold mb-4">
            <GiSuitcase className="text-green-600" />
            <p>Career Highlights</p>
          </div>
          <p className="text-gray-600">
            No formal work experience yet, but passionate and actively learning.
            Eager to contribute and grow professionally.
          </p>
    </section>
  )
}

export default Exp_Card