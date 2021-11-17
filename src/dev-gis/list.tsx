import {
    List,
    TextField,
    TagField,
    DateField,
    Table,
    useTable,
    useMany,
    FilterDropdown,
    Select,
    ShowButton,
    useSelect,
    Space,
    EditButton,
    DeleteButton,
} from "@pankod/refine";

import { ILayer, ICategory } from "../interfaces";
import { useCustom } from "@pankod/refine";


export const DevList: React.FC = () => {
    const { data, isLoading } = useCustom({
        url: `https://dev-gis.ankageo.com/rest/v1/layer`,
        method: "get",
        config: {
            query: {
                token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWQiOjE5NzQsImlhdCI6MTYzNzEzNDM4OSwiZXhwIjoxNjM3MTc3NTg5fQ.8IcMRV0WRGl_H9IuMpWdmKlmzfy5-eD3jQUYg9YdYh8",
            },
        },
    });

    // const categoryIds = tableProps?.dataSource?.map((item) => item.category.id) ?? [];

    // const { data: categoriesData, isLoading } = useMany<ICategory>({
    //     resource: "categories",
    //     ids: categoryIds,
    //     queryOptions: {
    //         enabled: categoryIds.length > 0,
    //     },
    // });

    // const { selectProps: categorySelectProps } = useSelect<ICategory>({
    //     resource: "categories",
    // });

    return (
        <List>
            <Table {...data} rowKey="id">
                <Table.Column dataIndex="title" title="title" />
                <Table.Column
                    dataIndex="status"
                    title="status"
                    render={(value) => <TagField value={value} />}
                />
                <Table.Column
                    dataIndex="createdAt"
                    title="createdAt"
                    render={(value) => <DateField format="LLL" value={value} />}
                />
                {/* <Table.Column
                    dataIndex={["category", "id"]}
                    title="category"
                    render={(value) => {
                        if (isLoading) {
                            return <TextField value="Loading..." />;
                        }

                        return (
                            <TextField
                                value={
                                    categoriesData?.data.find(
                                        (item) => item.id === value,
                                    )?.title
                                }
                            />
                        );
                    }} */}
                    {/* filterDropdown={(props) => (
                        <FilterDropdown {...props}>
                            <Select
                                style={{ minWidth: 200 }}
                                mode="multiple"
                                placeholder="Select Category"
                                {...categorySelectProps}
                            />
                        </FilterDropdown>
                    )}
                /> */}
                <Table.Column<ILayer>
                    title="Actions"
                    dataIndex="actions"
                    render={(_text, record): React.ReactNode => {
                        return (
                            <Space>
                                <ShowButton
                                    size="small"
                                    recordItemId={record.id}
                                    hideText
                                />
                                <EditButton
                                    size="small"
                                    recordItemId={record.id}
                                    hideText
                                />
                                <DeleteButton
                                    size="small"
                                    recordItemId={record.id}
                                    hideText
                                />
                            </Space>
                        );
                    }}
                />
            </Table>
        </List>
    );
};