import React from 'react';
import { PageContainer } from '../../components/layout/PageContainer';
import { Calendar } from '../../components/ui/Calendar';
import { ActivityList } from './ActivityList';

const Planner = () => {
  return (
    <PageContainer className="space-y-6">
      <Calendar />
      <ActivityList />
    </PageContainer>
  );
};

export default Planner;