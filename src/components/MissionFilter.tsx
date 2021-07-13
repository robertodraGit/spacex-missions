import { Button } from "atoms/Button";
import { FC, useEffect, useState } from "react"
import { MissionFilterProps } from "types/props/MissionFilterProps"

export const MissionFilter: FC<MissionFilterProps> = ({ years, setURL }) => {
    const [objectQuery, setObjectQuery] = useState({});

    const handleClick = (value: number | boolean, event: React.MouseEvent) => {
        const dataset = event.currentTarget.getAttribute("data-filter");

        setObjectQuery(prevState => {
            if (dataset)
                return {
                    ...prevState,
                    [dataset]: value,
                }
        })
    }

    useEffect(() => {
        setURL(objectQuery)
    }, [objectQuery])

    return (
        <aside className="filter-column col-3">
            <h4>Filters</h4>
            <p>Launch Year</p>
            <ul>
                {years.map((year, index) =>
                    <li key={index}>
                        <Button clicked={false}
                            data-filter='launch_year'
                            onClick={e => handleClick(year, e)}
                        >
                            {year}
                        </Button>
                    </li>
                )}
            </ul>
            <p>Succesfull Launch</p>
            <ul>
                <li>
                    <Button clicked={false}
                        data-filter='launch_success'
                        onClick={e => handleClick(true, e)}
                    >True</Button>
                </li>
                <li>
                    <Button clicked={false}
                        data-filter='launch_success'
                        onClick={e => handleClick(false, e)}
                    >False</Button>
                </li>
            </ul>
            <p>Succesfull Landing</p>
            <ul>
                <li>
                    <Button clicked={false}
                        data-filter='land_success'
                        onClick={e => handleClick(true, e)}
                    >True</Button>
                </li>
                <li>
                    <Button clicked={false}
                        data-filter='land_success'
                        onClick={e => handleClick(false, e)}
                    >False</Button>
                </li>
            </ul>
        </aside>
    )
}