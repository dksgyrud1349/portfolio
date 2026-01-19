import { PropsWithChildren } from 'react';
import ProjectRow from './row';
import { CommonSection } from '../common/CommonSection';
import { ISideProject } from './ISideProject';
import { PreProcessingComponent } from '../common/PreProcessingComponent';

type Payload = ISideProject.Payload;

export const SideProject = {
  Component: ({ payload }: PropsWithChildren<{ payload: Payload }>) => {
    return PreProcessingComponent<Payload>({
      payload,
      component: Component,
    });
  },
};

function Component({ payload }: PropsWithChildren<{ payload: Payload }>) {
  return (
    <CommonSection title="SIDE PROJECT">
      <ProjectRow payload={payload} />
    </CommonSection>
  );
}
