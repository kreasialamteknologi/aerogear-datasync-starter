import gql from "graphql-tag"

export const TaskFragment = gql`
  fragment TaskFields on Task {
   _id
   title
   description
   status
   type
   priority
   public
   startDate
   payload
   _version

} 
`


export const TaskExpandedFragment = gql`
  fragment TaskExpandedFields on Task {
   _id
   title
   description
   status
   type
   priority
   public
   startDate
   payload
   _version
   comments {
      _id
      message
      author
   }
} 
`




export const CommentFragment = gql`
  fragment CommentFields on Comment {
   _id
   message
   author
} 
`


export const CommentExpandedFragment = gql`
  fragment CommentExpandedFields on Comment {
   _id
   message
   author
   note {
      _id
      title
      description
      status
      type
      priority
      public
      startDate
      payload
   }
} 
`


export const findTasks = gql`
  query findTasks($filter: TaskFilter, $page: PageRequest, $orderBy: OrderByInput) {
    findTasks(filter: $filter, page: $page, orderBy: $orderBy) {
      items {
        ...TaskExpandedFields
      }
      offset
      limit
      count
    }
  }

  ${TaskExpandedFragment}
`


export const getTask = gql`
  query getTask($id: GraphbackObjectID!) {
    getTask(id: $id) {
      ...TaskExpandedFields
    }
  }

  ${TaskExpandedFragment}
`


export const findComments = gql`
  query findComments($filter: CommentFilter, $page: PageRequest, $orderBy: OrderByInput) {
    findComments(filter: $filter, page: $page, orderBy: $orderBy) {
      items {
        ...CommentExpandedFields
      }
      offset
      limit
      count
    }
  }

  ${CommentExpandedFragment}
`


export const getComment = gql`
  query getComment($id: GraphbackObjectID!) {
    getComment(id: $id) {
      ...CommentExpandedFields
    }
  }

  ${CommentExpandedFragment}
`


export const createTask = gql`
  mutation createTask($input: CreateTaskInput!) {
  createTask(input: $input) {
      ...TaskFields
  }
}


  ${TaskFragment}
`


export const updateTask = gql`
  mutation updateTask($input: MutateTaskInput!) {
  updateTask(input: $input) {
      ...TaskFields
  }
}


  ${TaskFragment}
`


export const deleteTask = gql`
  mutation deleteTask($input: MutateTaskInput!) {
  deleteTask(input: $input) {
      ...TaskFields
  }
}


  ${TaskFragment}
`


export const createComment = gql`
  mutation createComment($input: CreateCommentInput!) {
  createComment(input: $input) {
      ...CommentFields
  }
}


  ${CommentFragment}
`


export const updateComment = gql`
  mutation updateComment($input: MutateCommentInput!) {
  updateComment(input: $input) {
      ...CommentFields
  }
}


  ${CommentFragment}
`


export const deleteComment = gql`
  mutation deleteComment($input: MutateCommentInput!) {
  deleteComment(input: $input) {
      ...CommentFields
  }
}


  ${CommentFragment}
`


export const newTask = gql`
  subscription newTask($filter: TaskSubscriptionFilter) {
  newTask(filter: $filter) {
      ...TaskFields
  }
} 

  ${TaskFragment}
`


export const updatedTask = gql`
  subscription updatedTask($filter: TaskSubscriptionFilter) {
  updatedTask(filter: $filter) {
      ...TaskFields
  }
} 

  ${TaskFragment}
`


export const deletedTask = gql`
  subscription deletedTask($filter: TaskSubscriptionFilter) {
  deletedTask(filter: $filter) {
      ...TaskFields
  }
} 

  ${TaskFragment}
`


export const newComment = gql`
  subscription newComment($filter: CommentSubscriptionFilter) {
  newComment(filter: $filter) {
      ...CommentFields
  }
} 

  ${CommentFragment}
`


export const updatedComment = gql`
  subscription updatedComment($filter: CommentSubscriptionFilter) {
  updatedComment(filter: $filter) {
      ...CommentFields
  }
} 

  ${CommentFragment}
`


export const deletedComment = gql`
  subscription deletedComment($filter: CommentSubscriptionFilter) {
  deletedComment(filter: $filter) {
      ...CommentFields
  }
} 

  ${CommentFragment}
`
