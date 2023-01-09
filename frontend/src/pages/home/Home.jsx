import './home.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';
import Posts from '../../components/posts/Posts';

export default function Home() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('/posts');
      console.log(res);
    };
    fetchPosts();
  }, []);
  return (
    <section>
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </section>
  );
}
