import {AxiosRequest} from '@app/utils/HttpClient/Request';
import {pageMock} from '@app/Services/mock/page';

export interface IPage {
    lang: string;
    charset: string;
    meta_title: string;
    meta_description: string;
    title: string,
    contact_phone: string,
    menu: {
        name: string,
        href: string
    }[],
    banner: {
        header: string,
        sub_header: string,
        form_title: string,
        form_name: string,
        form_phone: string,
        form_button: string
    },
    advantages: {
        header: string,
        items: {
            title: string,
            text: string
        }[]
    },
    gallery: {
        header: string,
        images: {
            src: string,
            alt: string
        }[]
    },
    schema: {
        header: string,
        image: {
            src: string,
            alt: string
        }
    },
    map: {
        header: string,
        text: string,
        image: {
            src: string,
            alt: string
        }
    },
    footer: {
        header: string
    }
}

export class PageService {
    public async find(slug?: string): Promise<{ data: IPage }> {
        return await AxiosRequest.testApi
            .get('page', {
                headers: {
                    'Accept-Language': 'ru'
                },
                params: {
                    // url: useRequestURL().href
                }
            })
            .then(async (response) => {
                if (slug) {
                    return {
                        data: pageMock
                    };
                }
                return {
                    data: response.data.data
                };
            });
    }
}
