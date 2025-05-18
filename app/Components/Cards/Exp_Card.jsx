import React from 'react'
import { GiSuitcase } from "react-icons/gi";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";



const Exp_Card = () => {
  return (
      <section className="flex-1 flex flex-col items-center max-w-2xl text-center">
          <div className="flex items-center gap-2 text-2xl font-semibold mb-4">
            <GiSuitcase className="text-green-600" />
            <p>Career Highlights</p>
          </div>
          <div className="flex flex-col gap-5 justify-center items-center text-center">
                    <CardContainer className="inter-var">
                      <CardBody
                        className={`
                          transition-all duration-300
                          bg-white dark:bg-zinc-900
                          text-black dark:text-white
                          shadow-md rounded-2xl max-w-lg
                          border border-transparent
                          hover:border-gray-300 dark:hover:border-emerald-400/40
                        `}
                      >
                        <CardItem translateZ={30} className="px-4 py-6">
                          <p className="text-gray-600 dark:text-gray-300">
                          No formal work experience yet, but passionate and actively learning. Eager to contribute and grow professionally.

</p>
                        </CardItem>
                      </CardBody>
                    </CardContainer>
                </div>
    </section>
  )
}

export default Exp_Card