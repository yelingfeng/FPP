<template>
  <BasicTable @register="registerTable">
    <template #toolbar>
      <a-button type="primary" @click="handleCreate"> 采购下单 </a-button>
    </template>
  </BasicTable>
  <PurchaseModel @register="registerModal" @success="handleSuccess" />
</template>
<script name="PurchaseList" lang="ts" setup>
  import { BasicTable, useTable } from '/@/components/Table';
  import { getBasicData } from './data/getPurchaseList';
  import { getBasicColumns } from './config/tableColumn';
  import { useModal } from '/@/components/Modal';
  import PurchaseModel from './component/PurchaseModel.vue';
  import { searchFormSchema } from './schema';
  const [registerModal, { openModal }] = useModal();

  const [registerTable, { reload }] = useTable({
    title: '采购列表',
    dataSource: getBasicData(),
    columns: getBasicColumns(),
    formConfig: {
      labelWidth: 120,
      schemas: searchFormSchema,
    },
    pagination: {
      pageSize: 20,
    },
    striped: false,
    useSearchForm: true,
    showTableSetting: true,
    bordered: true,
    showIndexColumn: false,
    canResize: true,
    actionColumn: {
      width: 80,
      title: '操作',
      dataIndex: 'action',
      // slots: { customRender: 'action' },
      fixed: undefined,
    },
  });

  function handleCreate() {
    openModal(true, {
      isUpdate: false,
    });
  }

  function handleSuccess() {
    reload();
  }
</script>
