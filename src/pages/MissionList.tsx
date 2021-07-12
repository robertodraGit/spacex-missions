import { FC } from "react";
import { MissionModel } from "types/models/MissionModel";
import { MissionListProps } from "types/props/MissionListProps";
import { MissionCard } from "components/MissionCard";

export const MissionList: FC<MissionListProps> = ({ data, isLoading }) => {
    if (isLoading === true) return <main className="card-wrapper col-9">Loading...</main>
    return (
        <main className="card-wrapper col-9">
            {data.map((mission: MissionModel, index: number) => (
                <MissionCard
                    key={index}
                    flightNumber={mission.flight_number}
                    launchLanding={mission.rocket.first_stage.cores[0].land_success}
                    launchSuccess={mission.launch_success}
                    launchYear={mission.launch_year}
                    missionLink={mission.links.article_link}
                    src={mission.links.mission_patch_small}
                    missionName={mission.mission_name}
                    missionIds={mission.mission_id}
                />
            ))}
        </main>
    )
}