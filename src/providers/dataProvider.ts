import axios, { AxiosInstance } from "axios";

const axiosInstance = axios.create();

export const SimpleRestDataProvider = (
    apiUrl: string,
    httpClient: AxiosInstance = axiosInstance,
) => ({
    custom: async (
        url: any,
        method: any,
        filters: any,
        sort: any,
        payload: any,
        query: any,
        headers: any
    ) => {
        let requestUrl = `${url}?`;

        // if (sort) {
        //     const { _sort, _order } = generateSort(sort);
        //     const sortQuery = {
        //         _sort: _sort.join(","),
        //         _order: _order.join(","),
        //     };
        //     requestUrl = `${requestUrl}&${stringify(sortQuery)}`;
        // }

        // if (filters) {
        //     const filterQuery = generateFilter(filters);
        //     requestUrl = `${requestUrl}&${stringify(filterQuery)}`;
        // }

        if (query) {
            requestUrl = `${requestUrl}&${(query)}`;
        }

        if (headers) {
            httpClient.defaults.headers = {
                ...httpClient.defaults.headers,
                ...headers,
            };
        }

        let axiosResponse;
        switch (method) {
            case "put":
                axiosResponse = await httpClient.put(requestUrl, payload);
                break;
            case "post":
                axiosResponse = await httpClient.post(requestUrl, payload);
                break;
            case "patch":
                axiosResponse = await httpClient.patch(requestUrl, payload);
                break;
            case "delete":
                axiosResponse = await httpClient.delete(requestUrl);
                break;
            default:
                axiosResponse = await httpClient.get(requestUrl);
                break;
        }

        const { data } = axiosResponse;

        return Promise.resolve({ data });
    },
})