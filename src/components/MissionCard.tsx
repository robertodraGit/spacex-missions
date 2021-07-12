import { FC } from 'react'
import { MissionCardProps } from 'types/props/MissionCardProps'

export const MissionCard: FC<MissionCardProps> = (props) => {
    const {
        src,
        missionName,
        missionLink,
        flightNumber,
        missionIds,
        launchYear,
        launchSuccess,
        launchLanding
    } = props;

    return (
        <div className='card-mission'>
            <img src={src}
                alt={missionName + `Badge`}
                className='image' />
            <a href={missionLink}
                className='mission-link'
                target="_blank"
                rel="noreferrer noopener"
            >{missionName} #{flightNumber}</a>
            <span><strong>Mission IDs:</strong></span>
            {
                missionIds.length !== 0
                    ? (
                        <ul>{missionIds.map((id, index) => (
                            <li key={index}> {id} </li>
                        ))}</ul>
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