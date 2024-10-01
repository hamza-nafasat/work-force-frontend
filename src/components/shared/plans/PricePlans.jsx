import React from 'react'
import { planCards } from '../../../data/data'
import PriceCard from './PriceCard'

const PricePlans = ({onSelectPlan}) => {
  return (
    <div>
        <h4 className="text-sm md:text-base font-semibold">Choose Plan</h4>
        <div className="mt-4 grid grid-cols-1 lg:grid-cols-3 gap-4" style={{rowGap:'3rem'}}>
            {planCards.map((card, i) => (
                <PriceCard key={i} card={card} onSelectPlan={onSelectPlan} />
            ))}
        </div>
    </div>
  )
}

export default PricePlans