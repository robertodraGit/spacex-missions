import { MissionCard } from "components/MissionCard";
import { FC } from "react";
import { useQuery } from "react-query";
import { MissionModel } from "types/models/MissionModel";
import { WrapperProps } from "types/props/WrapperProps";


export const CardWrapper: FC<WrapperProps> = ({ toFetch }) => {
    const { isLoading, error, data } = useQuery("missions", () =>
        fetch(
            toFetch
        ).then((res) => res.json())
    );

    if (isLoading) return "Loading...";
    if (error) return "An error has occurred. Retry";

    return (
        data.map((mission: MissionModel) => (
            <MissionCard
                flightNumber={mission.flight_number}
                launchLanding={mission.rocket.first_stage.cores[0].land_success}
                launchSuccess={mission.launch_success}
                launchYear={mission.launch_year}
                missionLink={mission.links.article_link}
                src={mission.links.mission_patch_small}
                missionName={mission.mission_name}
                missionIds={mission.mission_id}
            />
        ))
    )
}