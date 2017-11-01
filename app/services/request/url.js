(function () {
    'use strict';

    angular
        .module('startApp')
        .factory('url', url);

    function url() {

        var proxy = "http://localhost:8080/";
        var serv = 'http://192.168.1.118:9082/XimpleReportWeb/';
        var server = proxy + serv;

        var url = {
            login: server + 'userLogin',
            initializedDataSource: server + 'report/new',
            newDataSources: server + 'dataSource/newDefault',
            dataSet: server + 'metadata/tables',
            dataSetNew: server + 'report/odaDataSet',
            createTable: server + 'report/table',
            dataSetCreate: null,
            dataSetFilters: null,
            joinDataSet: server + 'report/joinDataSet',
            getConfigJoin: server + 'metadata/joinTables',
            tableMetadata: server + 'metadata/columns?schemaName=CAPWD_DTA&tableName=',
            saveReport: server + 'report/save',
            createLabel: server + 'report/label',
            createGrid: server + 'report/grid',

            setDataSetCreate: function (id) {
                if (!id) {
                    console.warn('no id', id);
                    return;
                }
                this.dataSetCreate = server + 'report/odaDataSet/' + id + '/fillBaseData';
                this.dataSetFilters = server + 'report/filters/' + id;
            },
            showReport: function (reportName, reportType) {
                return serv + 'reportShow?reportName=' + reportName + '.rptdesign&reportFormat=' + reportType;
            },
            deleteColumns: function (id) {
                return server + 'report/table/' + id + '/columns';
            },
            addColumns: function (id) {
                return server + 'report/table/'+ id + '/columns';
            }
        };
        return url;
    }
})();