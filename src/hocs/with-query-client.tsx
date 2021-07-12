import { Component, FC } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

export const queryClient = new QueryClient();

export const withQueryClient = (Component: FC, client: QueryClient = queryClient) => {
    return <QueryClientProvider client={client}>
        {Component}  
        {/* <Component /> */}
    </QueryClientProvider>
}