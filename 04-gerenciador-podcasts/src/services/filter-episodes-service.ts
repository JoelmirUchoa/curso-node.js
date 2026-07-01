import { IncomingMessage } from "http";
import { repositorypodcasts } from "../repositories/podcasts-repository";
import { FilterPodcastModel } from "../models/filter-podcast-model";
import { StatusCode } from "../utils/status-code";

export const serviceFilterEpisodes = async (
    podcastName: string | undefined
): Promise<FilterPodcastModel> => {
    
    // define a interface de retorno do serviço
    let responseFormat: FilterPodcastModel = {
        statusCode: 0,
        body: []
    };

    // busca os dados do repositório
    const queryString = podcastName?.split('?')[1] ?? "";
    const data = await repositorypodcasts(queryString);

    //verifica se o retorno do repositório é válido
    if (data && data.length > 0) {
        responseFormat.statusCode = StatusCode.OK;
    } else {
        responseFormat.statusCode = StatusCode.NOT_FOUND;
    }
    responseFormat.body = data;

    return responseFormat;
}