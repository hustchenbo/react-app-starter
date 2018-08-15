/**
 * @file components/DemoPage/list
 * @author chenbo09
 */

import _ from 'lodash';
import {Table, Button, Modal, message, Divider} from 'antd';

const confirm = Modal.confirm;

class DemoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedRowKeys: [],
            loading: false,
            pageSize: 10,
            page: 1,
            count: 100
        };
    }

    componentDidMount() {
        this.loadList();
    }

    initColumns = () => {
        return [
            {
                title: 'Name',
                dataIndex: 'name'
            },
            {
                title: 'Age',
                dataIndex: 'age'
            },
            {
                title: 'Address',
                dataIndex: 'address'
            },
            {
                title: 'Action',
                key: 'action',
                render: (text, record) => (
                    <span>
                        <a onClick={() => this.viewDetail(record.id)}>详情</a>
                        <Divider type="vertical" />
                        <a onClick={() => this.viewDetail(record.id)}>
                            也是详情
                        </a>
                    </span>
                )
            }
        ];
    };

    loadList = () => {
        const {actions} = this.props;
        const {pageSize, page} = this.state;
        this.setState({loading: true});
        const promise = actions.getDemoList({pageSize, page});
        promise.then(() =>
            this.setState({
                selectedRowKeys: [],
                loading: false
            })
        );
    };

    deleteUser = () => {
        const {actions, demoList} = this.props;
        const {selectedRowKeys} = this.state;

        const ids = _.map(selectedRowKeys, key => {
            return _.result(_.find(demoList.result, {key}), 'id');
        });

        const promise = actions.deleteUser({ids});
        return promise.then(
            () => {
                message.success('删除记录成功');
                this.loadList();
            },
            () => message.error('删除记录失败')
        );
    };

    viewDetail = id => {
        const {demoList} = this.props;
        const detail = _.find(demoList.result, {id});
        Modal.info({
            title: 'This is a notification message',
            content: (
                <div>
                    <p>id: {detail.id}</p>
                    <p>name: {detail.name}</p>
                    <p>age: {detail.age}</p>
                    <p>address: {detail.address}</p>
                </div>
            )
        });
    };

    showDeleteConfirm = () => {
        confirm({
            title: '确认?',
            content: '确认要删除选中记录？',
            okText: '确认删除',
            okType: 'danger',
            cancelText: '取消',
            onOk: this.deleteUser
        });
    };

    onSelectChange = selectedRowKeys => {
        this.setState({selectedRowKeys});
    };

    onPageChange = (page, pageSize) => {
        this.setState({page, pageSize}, () => {
            this.loadList();
        });
    };

    onPageSizeChange = (current, size) => {
        this.setState({pageSize: size}, () => {
            this.loadList();
        });
    };

    render() {
        const {demoList} = this.props;
        const {loading, selectedRowKeys} = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange
        };
        const pagination = {
            total: demoList.totalCount,
            pageSize: this.state.pageSize,
            defaultPageSize: this.state.pageSize,
            showSizeChanger: true,
            onShowSizeChange: this.onPageSizeChange,
            onChange: this.onPageChange,
            showTotal: function () {
                return '共 ' + demoList.totalCount + ' 条数据';
            }
        };

        const columns = this.initColumns();
        const hasSelected = selectedRowKeys.length > 0;
        return (
            <div>
                <div style={{marginBottom: 16}}>
                    <Button
                        type="primary"
                        onClick={this.loadList}
                        disabled={false}
                        loading={loading}
                    >
                        刷新
                    </Button>
                    <Button
                        style={{marginLeft: 8}}
                        type="primary"
                        onClick={this.showDeleteConfirm}
                        disabled={!hasSelected}
                        loading={loading}
                    >
                        删除
                    </Button>
                    <span style={{marginLeft: 8}}>
                        {hasSelected
                            ? `已经选择 ${selectedRowKeys.length} 条记录`
                            : ''}
                    </span>
                </div>
                <Table
                    rowSelection={rowSelection}
                    columns={columns}
                    dataSource={demoList.result}
                    pagination={pagination}
                    loading={loading}
                />
            </div>
        );
    }
}

export default DemoList;
