import React from 'react';
import { PageContainer } from '../../components/layout/PageContainer';
import { BentoGrid } from '../../components/ui/BentoGrid';
import ActivityChart from './ActivityChart';
import RecentMemories from './RecentMemories';
import SunProtection from './SunProtection';
import QuickActions from './QuickActions';

const Dashboard = () => {
  return (
    <PageContainer className="space-y-6">
      <BentoGrid>
        <ActivityChart />
        <RecentMemories />
        <SunProtection />
        <QuickActions />
      </BentoGrid>
    </PageContainer>
  );
};

export default Dashboard;