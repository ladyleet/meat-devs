// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateTask = `subscription OnCreateTask {
  onCreateTask {
    id
    title
    description
    status
  }
}
`;
export const onUpdateTask = `subscription OnUpdateTask {
  onUpdateTask {
    id
    title
    description
    status
  }
}
`;
export const onDeleteTask = `subscription OnDeleteTask {
  onDeleteTask {
    id
    title
    description
    status
  }
}
`;
export const onCreatePrivateNote = `subscription OnCreatePrivateNote {
  onCreatePrivateNote {
    id
    content
    post {
      id
      content
    }
  }
}
`;
export const onUpdatePrivateNote = `subscription OnUpdatePrivateNote {
  onUpdatePrivateNote {
    id
    content
    post {
      id
      content
    }
  }
}
`;
export const onDeletePrivateNote = `subscription OnDeletePrivateNote {
  onDeletePrivateNote {
    id
    content
    post {
      id
      content
    }
  }
}
`;
export const onCreatePost = `subscription OnCreatePost {
  onCreatePost {
    id
    content
  }
}
`;
export const onUpdatePost = `subscription OnUpdatePost {
  onUpdatePost {
    id
    content
  }
}
`;
export const onDeletePost = `subscription OnDeletePost {
  onDeletePost {
    id
    content
  }
}
`;
