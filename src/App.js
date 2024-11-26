import React, {
  useRef,
  forwardRef,
  createContext,
  useState,
  useEffect,
} from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import FirstPage from "./pages/FirstPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SecondPage from "./pages/SecondPage";
import ThirdPage from "./pages/ThirdPage";
import ForthPage from "./pages/ForthPage";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const tabs = [
    "전체메뉴",
    "커피",
    "밀크티",
    "스무디",
    "차",
    "주스",
    "라떼",
    "버블티",
    "에이드",
    "더보기",
  ];

  const totalMenuItems = [
    {
      id: 1,
      name: "아메리카노 (아이스)",
      price: "2500",
      img: "/images/아메리카노.png",
    },
    {
      id: 2,
      name: "바닐라라떼 (아이스)",
      price: "2500",
      img: "/images/바닐라라떼.png",
    },
    {
      id: 3,
      name: "콜드브루 디카페인",
      price: "2900",
      img: "/images/콜드브루.png",
    },
    { id: 4, name: "흑당라떼", price: "2500", img: "/images/흑당라떼.png" },
    { id: 5, name: "딸기라떼", price: "2500", img: "/images/딸기라떼.png" },
    {
      id: 6,
      name: "미숫가루 달고나라떼",
      price: "2500",
      img: "/images/미숫가루라떼.png",
    },
    {
      id: 7,
      name: "콜드브루 (아이스)",
      price: "2500",
      img: "/images/콜드브루.png",
    },
    {
      id: 8,
      name: "바닐라라떼 (아이스)",
      price: "2500",
      img: "/images/바닐라라떼.png",
    },
    {
      id: 9,
      name: "딸기라떼 (아이스)",
      price: "2500",
      img: "/images/딸기라떼.png",
    },
    {
      id: 10,
      name: "카라멜 마끼아또",
      price: "3000",
      img: "/images/바닐라라떼.png",
    },
    {
      id: 11,
      name: "녹차라떼",
      price: "2800",
      img: "/images/미숫가루라떼.png",
    },
    {
      id: 12,
      name: "헤이즐넛라떼",
      price: "2900",
      img: "/images/콜드브루.png",
    },
  ];
  const [selectedTab, setSelectedTab] = useState("전체메뉴");
  const categorizeMenu = (totalMenuItems) => {
    const categorizedMenu = {
      전체메뉴: totalMenuItems,
      커피: totalMenuItems.filter(
        (item) =>
          item.name.includes("아메리카노") ||
          item.name.includes("콜드브루") ||
          item.name.includes("마끼아또")
      ),
      라떼: totalMenuItems.filter((item) => item.name.includes("라떼")),
    };

    if(selectedTab == "전체메뉴"){return categorizedMenu.전체메뉴}
    else if(selectedTab == "커피"){return categorizedMenu.커피}
    else if(selectedTab == "라떼"){return categorizedMenu.라떼}
    else return [{
      name: "추가예정",
      price: "0",
      img: "/images/콜드브루.png",
    }]
  };

  const menuItems = categorizeMenu(totalMenuItems);

  const [isHighContrast, setisHighContrast] = useState(false);
  const [isLowScreen, setisLowScreen] = useState(true);
  const [isCreditPayContent, setisCreditPayContent] = useState(0);
  const [quantities, setQuantities] = useState(
    menuItems.reduce((acc, item) => ({ ...acc, [item.id]: 0 }), {})
  );
  const [isReturnModal, setisReturnModal] = useState(false);
  const [isAccessibilityModal, setisAccessibilityModal] = useState(false);

  // 수량 증가
  const handleIncrease = (id) => {
    setQuantities((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  };

  // 수량 감소
  const handleDecrease = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: prev[id] > 0 ? prev[id] - 1 : 0,
    }));
  };

  const calculateSum = (quantities) => {
    return Object.values(quantities).reduce((sum, value) => sum + value, 0);
  };

  const calculateTotal = (quantities, menuItems) => {
    return Object.entries(quantities)
      .filter(([key, value]) => value !== 0)
      .reduce((sum, [key, value]) => {
        const priceObj = menuItems[key - 1];
        const price = priceObj ? priceObj.price : 0;
        return sum + value * price;
      }, 0);
  };

  const totalCount = calculateSum(quantities);
  const totalSum = calculateTotal(quantities, menuItems);

  const divRefs = useRef([]);
  const modalRefs = useRef([]);

  useEffect(() => {
    if (document.activeElement) {
      document.activeElement.blur();
    }
  }, [isAccessibilityModal]);

  const divhandleKeyDown = (e, index) => {
    const focusableElements = [
      ...divRefs.current,
      //  ...footerRefs.current
    ]; // 모든 포커스 가능한 요소 통합  
    const totalElements = focusableElements.length;
    console.log(e.key);
    if (e.key === "ArrowRight") {
      const nextIndex = (index + 1) % totalElements;
      focusableElements[nextIndex]?.focus();
    } else if (e.key === "ArrowLeft") {
      const prevIndex = (index - 1 + totalElements) % totalElements;
      focusableElements[prevIndex]?.focus();
    } else if (e.key === "ArrowDown") {
      const nextIndex = (index + 1) % totalElements;
      focusableElements[nextIndex]?.focus();
    } else if (e.key === "ArrowUp") {
      const prevIndex = (index - 1 + totalElements) % totalElements;
      focusableElements[prevIndex]?.focus();
    } else if (e.key === "Enter") {
      // Enter 키로 클릭 트리거
      focusableElements[index]?.click();
    }
  };

  const modalhandleKeyDown = (e, index) => {
    const focusableElements = [
      ...modalRefs.current,
      //  ...footerRefs.current
    ]; // 모든 포커스 가능한 요소 통합  
    const totalElements = focusableElements.length;
    console.log(e.key);
    if (e.key === "ArrowRight") {
      const nextIndex = (index + 1) % totalElements;
      focusableElements[nextIndex]?.focus();
    } else if (e.key === "ArrowLeft") {
      const prevIndex = (index - 1 + totalElements) % totalElements;
      focusableElements[prevIndex]?.focus();
    } else if (e.key === "ArrowDown") {
      const nextIndex = (index + 1) % totalElements;
      focusableElements[nextIndex]?.focus();
    } else if (e.key === "ArrowUp") {
      const prevIndex = (index - 1 + totalElements) % totalElements;
      focusableElements[prevIndex]?.focus();
    } else if (e.key === "Enter") {
      // Enter 키로 클릭 트리거
      focusableElements[index]?.click();
    }
  };


  return (
    <AppContext.Provider
      value={{
        divRefs,
        divhandleKeyDown,
        modalRefs,
        modalhandleKeyDown,
        isLowScreen,
        setisLowScreen,
        isHighContrast,
        setisHighContrast,
        isCreditPayContent,
        setisCreditPayContent,
        tabs,
        menuItems,
        selectedTab,
        setSelectedTab,
        quantities,
        setQuantities,
        handleIncrease,
        handleDecrease,
        calculateSum,
        calculateTotal,
        totalCount,
        totalSum,
        isReturnModal,
        setisReturnModal,
        isAccessibilityModal,
        setisAccessibilityModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// 첫 번째 페이지에서는 푸터, 나머지 페이지에서는 헤더와 푸터
const LayoutWithFooterOnly = () => (
  <>
    <div className="wrap">
      <Outlet />
      <Footer />
    </div>
  </>
);
const LayoutWithHeaderAndFooter = () => (
  <>
    <div className="wrap">
      <Header />
      <Outlet />
      <Footer />
    </div>
  </>
);

// 라우터 설정
const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutWithFooterOnly />,
    children: [{ index: true, element: <FirstPage /> }],
  },
  {
    path: "/second",
    element: <LayoutWithHeaderAndFooter />,
    children: [{ index: true, element: <SecondPage /> }],
  },
  {
    path: "/third",
    element: <LayoutWithHeaderAndFooter />,
    children: [{ index: true, element: <ThirdPage /> }],
  },
  {
    path: "/forth",
    element: <LayoutWithHeaderAndFooter />,
    children: [{ index: true, element: <ForthPage /> }],
  },
]);

const App = () => {
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
};

export default App;
