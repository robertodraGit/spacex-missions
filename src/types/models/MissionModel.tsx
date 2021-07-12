export type MissionModel = {
    flight_number: number,
    mission_name: string,
    mission_id: string[],
    launch_year: number,
    rocket: {
      first_stage: {
        cores: [
          {
            land_success: boolean,
          }
        ]
      }
    },
    launch_success: boolean,
    links: {
      mission_patch: string,
      mission_patch_small: string,
      article_link: string,
    }
}