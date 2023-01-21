import './home.css';
import React from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';
import Posts from '../../components/posts/Posts';

export default function Home() {
  const baseURL = 'http://localhost:3000/api/v1';
  const [posts, setPosts] = React.useState([]);
  const { search } = useLocation();

  React.useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(`${baseURL}/posts${search}`);
      setPosts(res.data);
    };

    fetchPosts();
  }, [search]);

  return (
    <section>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </section>
  );
}
