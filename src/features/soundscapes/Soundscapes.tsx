import React from 'react';
import { PageContainer } from '../../components/layout/PageContainer';
import { SoundPlayer } from './SoundPlayer';

const Soundscapes = () => {
  return (
    <PageContainer className="space-y-6">
      <SoundPlayer />
    </PageContainer>
  );
};

export default Soundscapes;