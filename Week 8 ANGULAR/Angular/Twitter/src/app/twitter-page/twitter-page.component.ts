import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TwitterService } from '../services/twitter/twitter.service';

@Component({
  selector: 'app-twitter-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './twitter-page.component.html',
  styleUrls: ['./twitter-page.component.css']
})
export class TwitterPageComponent implements OnInit {
  users: any[] = [];
  posts: any[] = [];
  comments: any[] = [];
  selectedUser: any = null;  
  selectedPostId: number = 0;

  constructor(private twitterService: TwitterService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.twitterService.getUsers().subscribe(users => {
      this.users = users;
      if (users.length > 0) {
        this.selectedUser = users[0];  
        this.loadUserPosts(this.selectedUser.id);
      }
    });
  }

  loadUserPosts(userId: number) {
    this.twitterService.getUserPosts(userId).subscribe(posts => {
      this.posts = posts;
      if (posts.length > 0) {
        this.selectedPostId = posts[0].id;
        this.loadPostComments(this.selectedPostId);
      }
    });
  }

  loadPostComments(postId: number) {
    this.twitterService.getPostComments(postId).subscribe(comments => {
      this.comments = comments;
    });
  }

  
  getUserName(): string | undefined {
    return this.selectedUser?.name;
  }


  onUserChange(event: Event) {
    const selectedValue = Number((event.target as HTMLSelectElement).value);
    this.selectedUser = this.users.find(user => user.id === selectedValue);
    if (this.selectedUser) {
      this.loadUserPosts(this.selectedUser.id);
    }
  }
}
