import TeamService from '../../App/Service/Team/TeamService';
import StoreService from '../../App/Service/Utils/StoreService';

export const FETCH_TEAMS = "FETCH_TEAMS";
export const LOAD_TEAMS = "LOAD_TEAMS";
export const FAILED_TEAMS = "FAILED_TEAMS";

export function fetchTeams(){
    TeamService.getTeams()
    .then( 
        (data) => {StoreService.dispatchAction(loadTeams(data));},
        (error) => {StoreService.dispatchAction(failedTeams(error));}
    );

    return {
        type: FETCH_TEAMS,
    }
}

export function loadTeams(teams){
    return {
        type: LOAD_TEAMS,
        value: teams,
    }
}

export function failedTeams(error){
    return {
        type: FAILED_TEAMS,
        value: error,
    }
}