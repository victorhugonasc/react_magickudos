import ApiService from '../ApiService'

const PATH = "/teams"

class TeamService{
    getTeams(params){
        return ApiService.doGet(PATH,params);
    }
}

export default new TeamService();