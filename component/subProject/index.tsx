import { PropsWithChildren } from 'react';
import ProjectRow from './row';
import { CommonSection } from '../common/CommonSection';
import { ISubProject } from './ISubProject';
import { PreProcessingComponent } from '../common/PreProcessingComponent';

type Payload = ISubProject.Payload;

export const SubProject = {
  Component: ({ payload }: PropsWithChildren<{ payload: Payload }>) => {
    return PreProcessingComponent<Payload>({
      payload,
      component: Component,
    });
  },
};

function Component({ payload }: PropsWithChildren<{ payload: Payload }>) {
  return (
    <CommonSection title="SUB PROJECT">
      <ProjectRow payload={payload} />
    </CommonSection>
  );
}
