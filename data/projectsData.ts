interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'FSignalR',
    description: 'A SignalR plugin for Flutter enabling real-time communication.',
    href: 'https://pub.dev/packages/fsignalr',
  },
  {
    title: 'FCU',
    description:
      'Command line app written in dart used to bootstrap Flutter projects with out-of-the-box features.',
    href: 'https://github.com/Haidar0096/fcu',
  },
  {
    title: 'Batch Image Editor',
    description:
      'A desktop app for batch image processing and editing, published on Snapcraft and Github.',
    href: 'https://github.com/Haidar0096/Image-Editor-Desktop',
  },
  {
    title: 'Image Magick Q8',
    description: "Flutter bindings for ImageMagick's C library for optimized image processing.",
    href: 'https://pub.dev/packages/image_magick_q8',
  },
  {
    title: 'Image Magick Q8 HDRI',
    description: "Flutter bindings for ImageMagick's C library for optimized image processing.",
    href: 'https://pub.dev/packages/image_magick_q8_hdri',
  },
  {
    title: 'Image Magick Q16',
    description: "Flutter bindings for ImageMagick's C library for optimized image processing.",
    href: 'https://pub.dev/packages/image_magick_q16',
  },
  {
    title: 'Image Magick Q16 HDRI',
    description: "Flutter bindings for ImageMagick's C library for optimized image processing.",
    href: 'https://pub.dev/packages/image_magick_q16_hdri',
  },
  {
    title: 'FConnectivity',
    description: 'A Flutter package for monitoring network connectivity.',
    href: 'https://pub.dev/packages/fconnectivity',
  },
  {
    title: 'Voice Changer',
    description: 'A cross-platform app for recording and manipulating sound using FFMPEG.',
    href: 'https://github.com/Haidar0096/Voice-Changer',
  },
  {
    title: 'Google Routes Flutter',
    description: 'Flutter client for accessing Google Routes API for location-based features.',
    href: 'https://pub.dev/packages/google_routes_flutter',
  },
  {
    title: 'Social Media Sign In Buttons',
    description:
      'A Flutter package providing custom sign-in buttons for various social media platforms.',
    href: 'https://pub.dev/packages/social_media_sign_in_buttons',
  },
  {
    title: 'Controllable Widgets',
    description: 'A Flutter package for useful widgets as draggable widgets and popup widgets.',
    href: 'https://pub.dev/packages/controllable_widgets',
  },
]

export default projectsData
