<template>
     <u-page-form :before-event="beforeEvent" @afterEvent="afterEvent"></u-page-form>
</template>
<script>
export default {
     name: "notice_class",
     data() {
          return {
               beforeEvent: {
                    /**
                     * @summary 页面数据保存前操作
                     * @description
                     * @param  record
                     * */
                    async beforeCreate(record) {
                         return record;
                    },
                    /**
                     * @summary 页面数据保存前操作
                     * @description
                     * @param  record
                     * */
                    async beforeModify(record) {
                         return record;
                    },
                    /**
                     * @summary 页面数据复制前操作
                     * @description
                     * @param  records
                     * */
                    async beforeCopy(record) {
                         return record;
                    },
                    /**
                     * @summary 页面数据展示前操作
                     * @description
                     * @param  record
                     * */
                    async beforeDetail(record) {
                         return record;
                    },
                    /**
                     * @summary 页面数据删除前操作
                     * @description
                     * @param  records
                     * */
                    async beforeRemove(records) {
                         return records;
                    },
                    /**
                     * @summary 页面数据提交前操作
                     * @description
                     * @param  records
                     * */
                    async beforeSubmit(records) {
                         return records;
                    },
                    /**
                     * @summary 页面数据审核前操作
                     * @description
                     * @param  records
                     * */
                    async beforeVerify(records) {
                         return records;
                    },
                    /**
                     * @summary 页面数据弃审前操作
                     * @description
                     * @param  records
                     * */
                    async beforeAbandon(records) {
                         return records;
                    },
                    /**
                     * @summary 页面数据状态切换前操作
                     * @description
                     * @param  records
                     * */
                    async beforeSwitch(records) {
                         return records;
                    },
                    /**
                     * @summary 页面数据打开前操作
                     * @description
                     * @param  records
                     * */
                    async beforeOpen(records) {
                         return records;
                    },
                    /**
                     * @summary 页面数据关闭前操作
                     * @description
                     * @param  records
                     * */
                    async beforeClose(records) {
                         return records;
                    },
               }
          }
     },
     methods: {
          afterEvent(event, records, extra) {
               if (this[event]) this[event](records, extra)
          },
          /**
           * @summary 页面数据保存后操作
           * @description
           * @param  record
           * */
          async afterCreate(record) {
               console.log(record);
          },
          /**
           * @summary 页面数据保存后操作
           * @description
           * @param  record
           * */
          async afterModify(record) {
               console.log(record);
          },
          /**
           * @summary 页面数据展示后操作
           * @description
           * @param  record
           * */
          async afterDetail(record) {
               console.log(record);
          },
          /**
           * @summary 页面数据删除后操作
           * @description
           * @param  records
           * */
          async afterRemove(records) {
               console.log(records);
          },
          /**
           * @summary 页面数据提交后操作
           * @description
           * @param  records
           * */
          async afterSubmit(records) {
               console.log(records);
          },
          /**
           * @summary 页面数据审核后操作
           * @description
           * @param  records
           * */
          async afterVerify(records) {
               console.log(records);
          },
          /**
           * @summary 页面数据弃审后操作
           * @description
           * @param  records
           * */
          async afterAbandon(records) {
               console.log(records);
          },
          /**
           * @summary 页面数据撤回前操作
           * @description
           * @param  records
           * */
          async beforeRevoke(records) {
               return records;
          },
          /**
           * @summary 页面数据撤回后操作
           * @description
           * @param  records
           * */
          async afterRevoke(records) {
               console.log(records);
          },
          /**
           * @summary 页面数据状态切换后操作
           * @description
           * @param  records
           * */
          async afterSwitch(records) {
               console.log(records);
          },
          /**
           * @summary 页面数据打开后操作
           * @description
           * @param  records
           * */
          async afterOpen(records) {
               console.log(records);
          },
          /**
           * @summary 页面数据关闭后操作
           * @description
           * @param  records
           * */
          async afterClose(records) {
               console.log(records);
          }
     }
}
</script>

<style scoped>

</style>