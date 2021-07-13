import React from 'react';
import Logo from 'common/components/UIElements/Logo';
import { Icon } from 'react-icons-kit';
import { ic_play_arrow } from 'react-icons-kit/md/ic_play_arrow';
import { openModal, closeModal } from '@redq/reuse-modal';
import Button from 'common/components/Button';
import Container from 'common/components/UI/Container';
import Image from 'common/components/Image';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import { SectionHeader } from '../appCreative.style';
import FeatureBlock from 'common/components/FeatureBlock';

import SectionWrapper, {
  ExperienceMainWrap,
  ExperienceWrapper,
  VideoWrapper,
  VideoArea,
  ClientWrapper,
  ImageSlider,
  ImageSlide,
} from './experience.style';
import { experiences } from 'common/data/AppCreative';

const Experiences = () => {
  const { slogan, title, features, video_theme, clients } = experiences;
  return (
    <SectionWrapper id="experience">
      <Container>
        <ClientWrapper>
          <div className="client__text">
            <Text as="span" content={'Partner companies and programs'} />
          </div>
          <ImageSlider>
            <ImageSlide>
              {clients.map((item) => (
                <Logo
                  key={`slide1__key${item.id}`}
                  href={item.link}
                  logoSrc={item.logo}
                  title={item.name}
                />
              ))}
            </ImageSlide>
            <ImageSlide>
              {clients.map((item) => (
                <Logo
                  key={`slide2__key${item.id}`}
                  href={item.link}
                  logoSrc={item.logo}
                  title={item.name}
                />
              ))}
            </ImageSlide>
          </ImageSlider>
        </ClientWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default Experiences;
