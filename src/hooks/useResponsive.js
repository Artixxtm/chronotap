import { useMediaQuery } from 'react-responsive'

const useResponsive = () => {
    const isBigDesktop = useMediaQuery({
        query: "(min-width: 1590px)"
    });
    const isDesktop = useMediaQuery({
        query: "(min-width: 768px)"
      });
      const isBigLaptop = useMediaQuery({
        query: "(min-width: 1400px)"
      })
      const isLaptop = useMediaQuery({
        query: "(max-width: 1280px)"
      });
      const isTablet = useMediaQuery({
        query: "(max-width: 1024px)"
      });
      const isMobile = useMediaQuery({
        query: "(max-width: 640px)"
      });
      const isSmallMobile = useMediaQuery({
        query: "(max-width: 380px)"
      });
      return {isBigDesktop, isDesktop, isBigLaptop, isLaptop, isTablet, isMobile, isSmallMobile}
}

export default useResponsive