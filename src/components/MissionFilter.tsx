import { FC } from "react"
import { MissionFilterProps } from "types/props/MissionFilterProps"

export const MissionFilter: FC<MissionFilterProps> = ({ years, baseURL, setURL }) => {
    const callback = () => {
        setURL('&launch_success=true')
    }

    return (
        <aside className="filter-column col-3">
           <button onClick={callback}>Ciao</button>
        </aside>
    )
}