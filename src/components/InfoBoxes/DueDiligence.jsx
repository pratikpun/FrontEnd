import React from 'react'

const DueDiligence = ({ dueDilligence }) => {
    return (
        <div>
            {/* Just provides true/false at the moment */}
            <img src='./certificate.svg' className='icon' />
            <p>Disclosure {dueDilligence.disclosure}</p>
            <p>Identity {dueDilligence.identity}</p>
            <p>Credit {dueDilligence.credit}</p>
            <p>Right to Work {dueDilligence.right - to - work}</p>
            <p>Education {dueDilligence.education}</p>

        </div>
    )
}

export default DueDiligence