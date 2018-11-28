"use strict";

class ServiceRegistry extends React.Component {
    constructor(props) {
        super(props);
        this.modifyMenu = this.modifyMenu.bind(this);
    }

    modifyMenu(event) {
        console.log(event.currentTarget)
    }

    render() {
        return (
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                <div
                    className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">服务注册列表</h1>
                    <div className="btn-toolbar mb-2 mb-md-0">
                        <div className="btn-group mr-2">
                            <button className="btn btn-sm btn-outline-secondary cont-btn">
                                <embed src="images/upload-cloud.svg" width="16" height="16" type="image/svg+xml"/>
                                <span>手动注册</span>
                            </button>
                            <button className="btn btn-sm btn-outline-secondary cont-btn">
                                <embed src="images/aperture.svg" width="16" height="16" type="image/svg+xml"/>
                                <span>扫描</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="my-3 p-3 bg-white rounded shadow-sm m-cent">
                    <h6 className="border-bottom d-flex justify-content-between align-items-center">
                    </h6>
                    <div className="media text-muted pt-3">
                            <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                                <div className="d-flex justify-content-between align-items-center w-100">
                                    <strong className="text-gray-dark">couchdb</strong>
                                    <span className="cont-btn">
                                        <svg onClick={this.modifyMenu} xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                             viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                             stroke-linecap="round" stroke-linejoin="round"
                                             className="feather feather-more-vertical">
                                            <circle cx="12" cy="12" r="1"></circle>
                                            <circle cx="12" cy="5" r="1"></circle>
                                            <circle cx="12" cy="19" r="1"></circle>
                                        </svg>
                                    </span>
                                </div>
                                <span className="d-block">
                                    <span>map to: 127.0.0.1:8088</span>
                                    <span>register time: 2018-11-28 14:24:33</span>
                                </span>
                            </div>
                    </div>
                </div>
            </main>
        );
    }
}