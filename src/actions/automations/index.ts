"use server";

import { onCurrentUser } from "../user";
import { findUser } from "../user/queries";
import {
  addKeyWord,
  addListener,
  addTrigger,
  createAutomation,
  deleteKeywordQuery,
  findAutomation,
  getAutomations,
  updateAutomation,
} from "./queries";

export const createAutomations = async (id?: string) => {
  const user = await onCurrentUser();
  user.id;
  try {
    const create = await createAutomation(user.id, id);

    if (create) return { status: 200, data: "Automation created" };
  } catch (error) {
    return { status: 500, data: "Internal server error" };
  }
};

export const getAllAutomations = async () => {
  const user = await onCurrentUser();
  try {
    const automations = await getAutomations(user.id);
    if (automations)
      return { status: 200, data: automations.automations || [] };

    return { status: 404, data: [] };
  } catch (error) {
    return { status: 500, data: [] };
  }
};

export const getAutomationInfo = async (id: string) => {
  await onCurrentUser();
  try {
    const automation = await findAutomation(id);
    if (automation) return { status: 200, data: automation };

    return { status: 404 };
  } catch (error) {
    return { status: 500 };
  }
};

export const updateAutomationName = async (
  automationId: string,
  data: {
    name?: string;
    active?: boolean;
    automation?: string;
  }
) => {
  await onCurrentUser();
  try {
    const update = await updateAutomation(automationId, data);
    if (update) {
      return { status: 200, data: "Automation Successfully updated" };
    }
    return { status: 404, data: "Oops! could not find automation" };
  } catch (error) {
    return { status: 500, data: "Oops! something went wrong" };
  }
};

export const saveListener = async (
  automationId: string,
  listener: "SMART_AI" | "MESSAGE",
  prompt: string,
  reply?: string
) => {
  await onCurrentUser();
  try {
    const create = await addListener(automationId, listener, prompt, reply);
    if (create)
      return {
        status: 200,
        data: "Listener created",
      };
    return {
      status: 404,
      data: "Can't save Listener",
    };
  } catch (error) {
    return {
      status: 500,
      data: "Oops! something went wrong",
    };
  }
};

export const saveTrigger = async (automationId: string, trigger: string[]) => {
  await onCurrentUser();
  try {
    const create = await addTrigger(automationId, trigger);
    if (create)
      return {
        status: 200,
        data: "Trigger created",
      };

    return {
      status: 404,
      data: "Can't save Trigger",
    };
  } catch (error) {
    return {
      status: 500,
      data: "Oops! something went wrong",
    };
  }
};

export const saveKeyword = async (automationId: string, keyword: string) => {
  await onCurrentUser();
  try {
    const create = await addKeyWord(automationId, keyword);

    if (create) return { status: 200, data: "Keyword added Successfully" };

    return { status: 404, data: "Can't add this Keyword" };
  } catch (error) {
    return { status: 500, data: "Oops! something went wrong" };
  }
};

export const deleteKeyword = async (id: string) => {
  await onCurrentUser();
  try {
    const deleted = await deleteKeywordQuery(id);

    if (deleted) return { status: 200, data: "Keyword deleted" };

    return { status: 404, data: "Keyword not found" };
  } catch (error) {
    return { status: 500, data: "Oops! something went wrong" };
  }
};

export const getProfilePosts = async () => {
  const user = await onCurrentUser();
  try {
    const profile = await findUser(user.id);
    const posts = await fetch(
      `${process.env.INSTAGRAM_BASE_URL}/me/media?fields=id,caption,media_url,media_type,timestamp&limit=10&access_token=${profile?.integrations[0].token}`
    );
    const parsed = await posts.json();
    if (parsed) return { status: 200, data: parsed.data };
    console.log("Error is getting posts");

    return { status: 404 };
  } catch (error) {
    console.log("Error is getting posts");
    return { status: 500 };
  }
};
