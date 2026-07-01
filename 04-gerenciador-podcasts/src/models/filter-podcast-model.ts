
import { PodcastModel } from './podcast-models';

export interface FilterPodcastModel {
    statusCode: number;
    body: PodcastModel[];
}