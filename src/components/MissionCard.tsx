import { FC } from 'react'
import { CardProps } from 'types/props/CardProps'

export const MissionCard: FC<CardProps> = ({ src, missionName, missionLink, flightNumber, missionIds, launchYear, launchSuccess, launchLanding }) => {
    return (
        <div className='card-mission'>
            <img src={src} alt={missionName + `Badge`} className='image' />
            <a href={missionLink} className='mission-link'>
                {missionName} #{flightNumber}
            </a>

            <span><strong>Mission IDs:</strong></span>
            {
                missionIds.length !== 0 ? (
                    <ul>
                        {
                            missionIds.map(id => (
                                <li> {id} </li>
                            ))
                        }
                    </ul>

                )
                    : <span>No IDs</span>
            }

            <div>
                <span><strong>Launch Year:</strong></span>
                <span> {launchYear} </span>
            </div>

            <div>
                <span><strong>Succesfull Launch:</strong></span>
                <span> {launchSuccess ? 'True' : 'False'} </span>
            </div>

            <div>
                <span><strong>Succesfull Landing:</strong></span>
                <span> {launchLanding ? 'True' : 'False'} </span>
            </div>
        </div>
    )
}