import React from 'react';
import { PageContainer } from '../../components/layout/PageContainer';
import { MemoryGallery } from './MemoryGallery';

const Memories = () => {
  return (
    <PageContainer className="space-y-6">
      <MemoryGallery />
    </PageContainer>
  );
};

export default Memories;