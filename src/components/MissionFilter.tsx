import { FC, useEffect, useState } from "react"
import { MissionFilterProps } from "types/props/MissionFilterProps"

export const MissionFilter: FC<MissionFilterProps> = ({ years, currentQueries, setURL }) => {
    const [objectQuery, setObjectQuery] = useState({});

    const handleClick = (value: string, key: string) => {
        setObjectQuery(prevState => {
            return {
                ...prevState,
                [key]: value,
            }
        })
    }

    useEffect(() => {
        setURL(objectQuery)
    }, [objectQuery, setURL])

    return (
        <aside className="filter-column col-3">
            <h4>Filters</h4>
            <p>Launch Year</p>
            <ul>
                {years.map((year, index) =>
                    <li key={index}>
                        <button onClick={() => { handleClick(`${year}`, 'launch_year') }}
                            className={`${currentQueries['launch_year'] === `${year}` ? 'btn-clicked' : ''}`}
                        >
                            {year}
                        </button>
                    </li>
                )}
            </ul>
            <p>Succesfull Launch</p>
            <ul>
                <li>
                    <button
                        onClick={() => handleClick('true', 'launch_success')}
                        className={`${currentQueries['launch_success'] === 'true' ? 'btn-clicked' : ''}`}
                    >True</button>
                </li>
                <li>
                    <button
                        onClick={() => handleClick("false", 'launch_success')}
                        className={`${currentQueries['launch_success'] === 'false' ? 'btn-clicked' : ''}`}
                    >False</button>
                </li>
            </ul>
            <p>Succesfull Landing</p>
            <ul>
                <li>
                    <button
                        onClick={() => handleClick("true", 'land_success')}
                        className={`${currentQueries['land_success'] === 'true' ? 'btn-clicked' : ''}`}
                    >True</button>
                </li>
                <li>
                    <button
                        onClick={() => handleClick("false", 'land_success')}
                        className={`${currentQueries['land_success'] === 'false' ? 'btn-clicked' : ''}`}
                    >False</button>
                </li>
            </ul>
        </aside>
    )
}