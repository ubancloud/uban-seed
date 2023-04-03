'use strict';

const Service = require('egg').Service;

class BaseFunc extends Service {
    async test(Filter){
        const { ctx } = this;
        const { filter, order, skip, limit, project, populate } = Filter;
        const error = {
            code: '0',
        };
        const getCount = async () => {
            return await ctx.model.SysUser.countDocuments(filter);
        };
        const getRecords = async () => {
            let records = await ctx.model.SysUser.find(filter, project)
                .sort(order)
                .skip(skip)
                .limit(limit)
                .catch(e => {
                    if (e) {
                        error.code = e.code;
                        error.message = e.message;
                    }
                    console.info(e);
                });
            if (populate) {
                records = await ctx.model.SysUser.deepPopulate(records, populate.split(','))
                    .catch(e => {
                        if (e) {
                            error.code = e.code;
                            error.message = e.message;
                        }
                        console.info(e);
                    });
            }
            return records;
        };

        const [ count, records ] = await Promise.all([ getCount(), getRecords() ]);
        return {error,count, records}
    }
}

module.exports = BaseFunc;
