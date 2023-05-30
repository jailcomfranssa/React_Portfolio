
import imageUrlBuilder from '@sanity/image-url';
import {createClient} from '@sanity/client'

export const client = createClient({
  projectId: 'egvtw94h',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: 'skRXJjRbfGd4DPwxLh0W9G8g1hnoV7KTJvfEJhdq1M8D8DIeOaUSMLrhvDTBKNZkZDF47Kyr0tCg3vUMNehUKKjGLlOkjsBqmh7vr7v8TewogfmJwaHunfxdVfORevf2CHDZp1GCHYLBDbBEV4AOWgUM3preeLBSk5zYtYaQJBv2kpteYwGB',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);