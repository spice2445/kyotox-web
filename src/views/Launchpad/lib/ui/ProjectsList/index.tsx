import { FC } from "react"
import { Navigation, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

import { tabsContent } from "../../../../../shared/lib/constants/data"
import { RightArrowIcon } from "../../../../../shared/lib/icons"
import { ProjectItem } from "../../../../../shared/ui/molecules"

import * as S from "./style"
import { ProjectsListProps } from "./types"

export const ProjectsList: FC<ProjectsListProps> = ({ onParticipate, completedList, onClaim }) => {
  const projects = Object.values(tabsContent).map((item) => item.info)

  return (
    <S.Root>
      <Swiper
        navigation={{
          prevEl: S.LeftNavigation.selector,
          nextEl: S.RightNavigation.selector,
        }}
        modules={[Navigation, Pagination]}
        pagination={{
          enabled: true,
          clickable: true,
          renderBullet: (index, className) =>
            `<span class="${className} ${S.PaginationBullet()}" style="background-color: ${
              projects[index].logoColor
            }">
              <img src="${projects[index].logo}" alt="" />
            </span>`,
        }}
        spaceBetween={20}
      >
        {projects.map((slide, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <SwiperSlide key={index}>
            <ProjectItem
              id={slide.id}
              logo={slide.logo}
              logoColor={slide.logoColor}
              img={slide.img}
              altImg={slide.altImg}
              title={slide.title}
              closedIn={slide.closedIn}
              listTechnology={slide.listTechnology}
              subtitle={slide.subtitle}
              onParticipate={onParticipate || (() => undefined)}
              isCompleted={completedList?.includes(slide.id)}
              onClaim={onClaim || (() => undefined)}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <S.RightNavigation>
        <RightArrowIcon />
      </S.RightNavigation>
      <S.LeftNavigation>
        <RightArrowIcon />
      </S.LeftNavigation>
    </S.Root>
  )
}
