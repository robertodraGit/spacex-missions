export type MissionFilterProps = {
    years: number[],
    currentQueries: {
        [key: string]: string
    }
    setURL: (string: {}) => void,
}