import React, { useEffect, useState } from "react";
import { createContext } from "react";
import axios from "axios";
export const Data = createContext();
const DataContext = ({ children }) => {
  const [homepage, setHomepage] = useState([]);
  const [about, setAbout] = useState([]);
  const [services, setServices] = useState([]);
  const [contact, setContact] = useState([]);
  const [news, setNews] = useState([]);
  const [career, setCareer] = useState([]);
  useEffect(() => {
    const fetchHomepage = async () => {
      const { data } = await axios.get(
        "http://34.207.41.229:4100/universomagnanimocom/get/homepage"
      );
      setHomepage(data);
    };
    fetchHomepage();

    const fetchAbout = async () => {
      const { data } = await axios.get(
        "http://34.207.41.229:4100/universomagnanimocom/get/about"
      );
      setAbout(data);
    };
    fetchAbout();

    const fetchServices = async () => {
      const { data } = await axios.get(
        "http://34.207.41.229:4100/universomagnanimocom/get/service"
      );
      setServices(data);
    };
    fetchServices();
    const fetchContactUs = async () => {
      const { data } = await axios.get(
        "http://34.207.41.229:4100/universomagnanimocom/get/contact"
      );
      setContact(data);
    };
    fetchContactUs();
    const fetchNews = async () => {
      const { data } = await axios.get(
        "http://34.207.41.229:4100/universomagnanimocom/get/newsupdate"
      );
      setNews(data);
    };
    fetchNews();
    const fetchCareer = async () => {
      const { data } = await axios.get(
        "http://34.207.41.229:4100/universomagnanimocom/get/career"
      );
      setCareer(data);
    };
    fetchCareer();
  }, []);

  return (
    <Data.Provider value={{ homepage, about, services, contact, news, career }}>
      {children}
    </Data.Provider>
  );
};

export default DataContext;
