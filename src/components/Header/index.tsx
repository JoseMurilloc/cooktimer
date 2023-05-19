import Image from 'next/image'
import Link from 'next/link'
import { GithubLogo, Share } from 'phosphor-react'

import * as S from './styles'
import { HeaderProps } from './types'

export default function Header (props: HeaderProps) {
  return (
    <S.ContainerHeader>
      <div className="content">
        <Link target={'__blank'} href="/" className="logo">
          <Image
            src="/logo.svg"
            width={68}
            height={68}
            alt="Logo do Cook Timer"
          />
        </Link>

        <S.ProfileHeader>
          <li>
            <Link href="https://github.com/JoseMurilloc/cooktimer" target={'_blank'}>
              <span>Contribuir</span>
              <GithubLogo size={22} weight="fill" />
            </Link>
          </li>
          <li>
            <Link href="/" target={'_blank'}>
              <span>Sobre nós</span>
              <Share size={22} weight="fill" />
            </Link>
          </li>
        </S.ProfileHeader>
      </div>
    </S.ContainerHeader>
  )
}
