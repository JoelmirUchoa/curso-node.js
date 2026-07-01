import { FilterPodcastModel } from "../models/filter-podcast-model";
import { repositorypodcasts } from "../repositories/podcasts-repository";
import { StatusCode } from "../utils/status-code";



export const serviceListeEpisodes = async () => {

        let responseFormat: FilterPodcastModel = {
            statusCode: 0,
            body: []
        };
        
    const data = await repositorypodcasts();

        if (data && data.length > 0) {
            responseFormat.statusCode = StatusCode.OK;
        } else {
            responseFormat.statusCode = StatusCode.NOT_FOUND;
        }
        responseFormat.body = data;
    
    return responseFormat;
};  