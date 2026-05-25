import React from 'react';
import { PageContainer } from '../../components/layout/PageContainer';
import { SunscreenTracker } from './SunscreenTracker';
import { UVIndex } from './UVIndex';

const SunSafe = () => {
  return (
    <PageContainer className="space-y-6">
      <UVIndex />
      <SunscreenTracker />
    </PageContainer>
  );
};

export default SunSafe;